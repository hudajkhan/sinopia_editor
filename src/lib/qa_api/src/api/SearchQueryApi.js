/**
 * QA 2.2 Linked Data API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Qa22LinkedDataApi) {
      root.Qa22LinkedDataApi = {};
    }
    root.Qa22LinkedDataApi.SearchQueryApi = factory(root.Qa22LinkedDataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * SearchQuery service.
   * @module api/SearchQueryApi
   * @version 2.2
   */

  /**
   * Constructs a new SearchQueryApi. 
   * @alias module:api/SearchQueryApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Send a query string to an authority and return search results.  Parameters are typical examples.  Actual parameters are driven by the authority&#39;s config file.
     * @param {String} vocab Name of the authority&#39;s configuration file.
     * @param {String} q The query string
     * @param {Object} opts Optional parameters
     * @param {String} opts.maxRecords Limit number of returned results. NOTE: Most authorities use maxRecords, but a few use maximumRecords for this parameter.
     * @param {String} opts.lang Limit string values to this language when multiple languages are provided.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.gETSearchAuthorityWithHttpInfo = function(vocab, q, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'vocab' is set
      if (vocab === undefined || vocab === null) {
        throw new Error("Missing the required parameter 'vocab' when calling gETSearchAuthority");
      }

      // verify the required parameter 'q' is set
      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling gETSearchAuthority");
      }


      var pathParams = {
        'vocab': vocab
      };
      var queryParams = {
        'q': q,
        'maxRecords': opts['maxRecords'],
        'lang': opts['lang'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/search/linked_data/{vocab}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a query string to an authority and return search results.  Parameters are typical examples.  Actual parameters are driven by the authority&#39;s config file.
     * @param {String} vocab Name of the authority&#39;s configuration file.
     * @param {String} q The query string
     * @param {Object} opts Optional parameters
     * @param {String} opts.maxRecords Limit number of returned results. NOTE: Most authorities use maxRecords, but a few use maximumRecords for this parameter.
     * @param {String} opts.lang Limit string values to this language when multiple languages are provided.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.gETSearchAuthority = function(vocab, q, opts) {
      return this.gETSearchAuthorityWithHttpInfo(vocab, q, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a query string to a subauthority in an authority and return search results.
     * @param {String} vocab Name of the authority&#39;s configuration file.
     * @param {String} subauthority Name of the subauthority.
     * @param {String} q The query string
     * @param {Object} opts Optional parameters
     * @param {String} opts.maxRecords Limit number of returned results.  NOTE: Most authorities use maxRecords, but a few use maximumRecords for this parameter.
     * @param {String} opts.lang Limit string values to this language when multiple languages are provided.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.gETSearchSubauthorityWithHttpInfo = function(vocab, subauthority, q, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'vocab' is set
      if (vocab === undefined || vocab === null) {
        throw new Error("Missing the required parameter 'vocab' when calling gETSearchSubauthority");
      }

      // verify the required parameter 'subauthority' is set
      if (subauthority === undefined || subauthority === null) {
        throw new Error("Missing the required parameter 'subauthority' when calling gETSearchSubauthority");
      }

      // verify the required parameter 'q' is set
      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling gETSearchSubauthority");
      }


      var pathParams = {
        'vocab': vocab,
        'subauthority': subauthority
      };
      var queryParams = {
        'q': q,
        'maxRecords': opts['maxRecords'],
        'lang': opts['lang'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/search/linked_data/{vocab}/{subauthority}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a query string to a subauthority in an authority and return search results.
     * @param {String} vocab Name of the authority&#39;s configuration file.
     * @param {String} subauthority Name of the subauthority.
     * @param {String} q The query string
     * @param {Object} opts Optional parameters
     * @param {String} opts.maxRecords Limit number of returned results.  NOTE: Most authorities use maxRecords, but a few use maximumRecords for this parameter.
     * @param {String} opts.lang Limit string values to this language when multiple languages are provided.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.gETSearchSubauthority = function(vocab, subauthority, q, opts) {
      return this.gETSearchSubauthorityWithHttpInfo(vocab, subauthority, q, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * CORS preflight request
     * @param {String} vocab Name of the authority&#39;s configuration file.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.oPTIONSSearchAuthorityWithHttpInfo = function(vocab) {
      var postBody = null;

      // verify the required parameter 'vocab' is set
      if (vocab === undefined || vocab === null) {
        throw new Error("Missing the required parameter 'vocab' when calling oPTIONSSearchAuthority");
      }


      var pathParams = {
        'vocab': vocab
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/search/linked_data/{vocab}', 'OPTIONS',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * CORS preflight request
     * @param {String} vocab Name of the authority&#39;s configuration file.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.oPTIONSSearchAuthority = function(vocab) {
      return this.oPTIONSSearchAuthorityWithHttpInfo(vocab)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * CORS preflight request
     * @param {String} vocab Name of the authority&#39;s configuration file.
     * @param {String} subauthority Name of the subauthority.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.oPTIONSSearchSubauthorityWithHttpInfo = function(vocab, subauthority) {
      var postBody = null;

      // verify the required parameter 'vocab' is set
      if (vocab === undefined || vocab === null) {
        throw new Error("Missing the required parameter 'vocab' when calling oPTIONSSearchSubauthority");
      }

      // verify the required parameter 'subauthority' is set
      if (subauthority === undefined || subauthority === null) {
        throw new Error("Missing the required parameter 'subauthority' when calling oPTIONSSearchSubauthority");
      }


      var pathParams = {
        'vocab': vocab,
        'subauthority': subauthority
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/search/linked_data/{vocab}/{subauthority}', 'OPTIONS',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * CORS preflight request
     * @param {String} vocab Name of the authority&#39;s configuration file.
     * @param {String} subauthority Name of the subauthority.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.oPTIONSSearchSubauthority = function(vocab, subauthority) {
      return this.oPTIONSSearchSubauthorityWithHttpInfo(vocab, subauthority)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
