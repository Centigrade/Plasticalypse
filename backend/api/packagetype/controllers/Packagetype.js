'use strict';

/**
 * Packagetype.js controller
 *
 * @description: A set of functions called "actions" for managing `Packagetype`.
 */

module.exports = {

  /**
   * Retrieve packagetype records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.packagetype.search(ctx.query);
    } else {
      return strapi.services.packagetype.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a packagetype record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.packagetype.fetch(ctx.params);
  },

  /**
   * Count packagetype records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.packagetype.count(ctx.query);
  },

  /**
   * Create a/an packagetype record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.packagetype.add(ctx.request.body);
  },

  /**
   * Update a/an packagetype record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.packagetype.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an packagetype record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.packagetype.remove(ctx.params);
  },

  /**
   * Add relation to a/an packagetype record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.packagetype.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an packagetype record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.packagetype.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an packagetype record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.packagetype.removeRelation(ctx.params, ctx.request.body);
  }
};
