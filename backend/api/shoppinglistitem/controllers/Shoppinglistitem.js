'use strict';

/**
 * Shoppinglistitem.js controller
 *
 * @description: A set of functions called "actions" for managing `Shoppinglistitem`.
 */

module.exports = {

  /**
   * Retrieve shoppinglistitem records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.shoppinglistitem.search(ctx.query);
    } else {
      return strapi.services.shoppinglistitem.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a shoppinglistitem record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.shoppinglistitem.fetch(ctx.params);
  },

  /**
   * Count shoppinglistitem records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.shoppinglistitem.count(ctx.query);
  },

  /**
   * Create a/an shoppinglistitem record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.shoppinglistitem.add(ctx.request.body);
  },

  /**
   * Update a/an shoppinglistitem record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.shoppinglistitem.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an shoppinglistitem record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.shoppinglistitem.remove(ctx.params);
  },

  /**
   * Add relation to a/an shoppinglistitem record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.shoppinglistitem.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an shoppinglistitem record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.shoppinglistitem.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an shoppinglistitem record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.shoppinglistitem.removeRelation(ctx.params, ctx.request.body);
  }
};
