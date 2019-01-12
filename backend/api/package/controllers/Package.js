'use strict';

/**
 * Package.js controller
 *
 * @description: A set of functions called "actions" for managing `Package`.
 */

module.exports = {

  /**
   * Retrieve package records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.package.search(ctx.query);
    } else {
      return strapi.services.package.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a package record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.package.fetch(ctx.params);
  },

  /**
   * Count package records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.package.count(ctx.query);
  },

  /**
   * Create a/an package record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.package.add(ctx.request.body);
  },

  /**
   * Update a/an package record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.package.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an package record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.package.remove(ctx.params);
  },

  /**
   * Add relation to a/an package record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.package.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an package record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.package.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an package record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.package.removeRelation(ctx.params, ctx.request.body);
  }
};
