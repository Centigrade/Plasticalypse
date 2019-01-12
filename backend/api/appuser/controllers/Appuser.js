'use strict';

/**
 * Appuser.js controller
 *
 * @description: A set of functions called "actions" for managing `Appuser`.
 */

module.exports = {

  /**
   * Retrieve appuser records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.appuser.search(ctx.query);
    } else {
      return strapi.services.appuser.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a appuser record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.appuser.fetch(ctx.params);
  },

  /**
   * Count appuser records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.appuser.count(ctx.query);
  },

  /**
   * Create a/an appuser record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.appuser.add(ctx.request.body);
  },

  /**
   * Update a/an appuser record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.appuser.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an appuser record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.appuser.remove(ctx.params);
  },

  /**
   * Add relation to a/an appuser record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.appuser.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an appuser record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.appuser.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an appuser record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.appuser.removeRelation(ctx.params, ctx.request.body);
  }
};
