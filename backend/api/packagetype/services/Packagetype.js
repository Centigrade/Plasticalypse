'use strict';

/**
 * Packagetype.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

// Strapi utilities.
const utils = require('strapi-hook-bookshelf/lib/utils/');

module.exports = {

  /**
   * Promise to fetch all packagetypes.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('packagetype', params);
    // Select field to populate.
    const populate = Packagetype.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Packagetype.query(function(qb) {
      _.forEach(filters.where, (where, key) => {
        if (_.isArray(where.value) && where.symbol !== 'IN') {
          for (const value in where.value) {
            qb[value ? 'where' : 'orWhere'](key, where.symbol, where.value[value])
          }
        } else {
          qb.where(key, where.symbol, where.value);
        }
      });

      if (filters.sort) {
        qb.orderBy(filters.sort.key, filters.sort.order);
      }

      qb.offset(filters.start);
      qb.limit(filters.limit);
    }).fetchAll({
      withRelated: populate
    });
  },

  /**
   * Promise to fetch a/an packagetype.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Packagetype.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Packagetype.forge(_.pick(params, 'id')).fetch({
      withRelated: populate
    });
  },

  /**
   * Promise to count a/an packagetype.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('packagetype', params);

    return Packagetype.query(function(qb) {
      _.forEach(filters.where, (where, key) => {
        if (_.isArray(where.value)) {
          for (const value in where.value) {
            qb[value ? 'where' : 'orWhere'](key, where.symbol, where.value[value]);
          }
        } else {
          qb.where(key, where.symbol, where.value);
        }
      });
    }).count();
  },

  /**
   * Promise to add a/an packagetype.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Packagetype.associations.map(ast => ast.alias));
    const data = _.omit(values, Packagetype.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Packagetype.forge(data).save();

    // Create relational data and return the entry.
    return Packagetype.updateRelations({ id: entry.id , values: relations });
  },

  /**
   * Promise to edit a/an packagetype.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Packagetype.associations.map(ast => ast.alias));
    const data = _.omit(values, Packagetype.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = Packagetype.forge(params).save(data);

    // Create relational data and return the entry.
    return Packagetype.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an packagetype.
   *
   * @return {Promise}
   */

  remove: async (params) => {
    params.values = {};
    Packagetype.associations.map(association => {
      switch (association.nature) {
        case 'oneWay':
        case 'oneToOne':
        case 'manyToOne':
        case 'oneToManyMorph':
          params.values[association.alias] = null;
          break;
        case 'oneToMany':
        case 'manyToMany':
        case 'manyToManyMorph':
          params.values[association.alias] = [];
          break;
        default:
      }
    });

    await Packagetype.updateRelations(params);

    return Packagetype.forge(params).destroy();
  },

  /**
   * Promise to search a/an packagetype.
   *
   * @return {Promise}
   */

  search: async (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('packagetype', params);
    // Select field to populate.
    const populate = Packagetype.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    const associations = Packagetype.associations.map(x => x.alias);
    const searchText = Object.keys(Packagetype._attributes)
      .filter(attribute => attribute !== Packagetype.primaryKey && !associations.includes(attribute))
      .filter(attribute => ['string', 'text'].includes(Packagetype._attributes[attribute].type));

    const searchNoText = Object.keys(Packagetype._attributes)
      .filter(attribute => attribute !== Packagetype.primaryKey && !associations.includes(attribute))
      .filter(attribute => !['string', 'text', 'boolean', 'integer', 'decimal', 'float'].includes(Packagetype._attributes[attribute].type));

    const searchInt = Object.keys(Packagetype._attributes)
      .filter(attribute => attribute !== Packagetype.primaryKey && !associations.includes(attribute))
      .filter(attribute => ['integer', 'decimal', 'float'].includes(Packagetype._attributes[attribute].type));

    const searchBool = Object.keys(Packagetype._attributes)
      .filter(attribute => attribute !== Packagetype.primaryKey && !associations.includes(attribute))
      .filter(attribute => ['boolean'].includes(Packagetype._attributes[attribute].type));

    const query = (params._q || '').replace(/[^a-zA-Z0-9.-\s]+/g, '');

    return Packagetype.query(qb => {
      // Search in columns which are not text value.
      searchNoText.forEach(attribute => {
        qb.orWhereRaw(`LOWER(${attribute}) LIKE '%${_.toLower(query)}%'`);
      });

      if (!_.isNaN(_.toNumber(query))) {
        searchInt.forEach(attribute => {
          qb.orWhereRaw(`${attribute} = ${_.toNumber(query)}`);
        });
      }

      if (query === 'true' || query === 'false') {
        searchBool.forEach(attribute => {
          qb.orWhereRaw(`${attribute} = ${_.toNumber(query === 'true')}`);
        });
      }

      // Search in columns with text using index.
      switch (Packagetype.client) {
        case 'pg': {
          const searchQuery = searchText.map(attribute =>
            _.toLower(attribute) === attribute
              ? `to_tsvector(${attribute})`
              : `to_tsvector('${attribute}')`
          );

          qb.orWhereRaw(`${searchQuery.join(' || ')} @@ to_tsquery(?)`, query);
          break;
        }
        default:
          qb.orWhereRaw(`MATCH(${searchText.join(',')}) AGAINST(? IN BOOLEAN MODE)`, `*${query}*`);
          break;
      }

      if (filters.sort) {
        qb.orderBy(filters.sort.key, filters.sort.order);
      }

      if (filters.skip) {
        qb.offset(_.toNumber(filters.skip));
      }

      if (filters.limit) {
        qb.limit(_.toNumber(filters.limit));
      }
    }).fetchAll({
      width: populate
    });
  }
};
