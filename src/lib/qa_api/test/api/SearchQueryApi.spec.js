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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Qa22LinkedDataApi);
  }
}(this, function(expect, Qa22LinkedDataApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Qa22LinkedDataApi.SearchQueryApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SearchQueryApi', function() {
    describe('gETSearchAuthority', function() {
      it('should call gETSearchAuthority successfully', function(done) {
        //uncomment below and update the code to test gETSearchAuthority
        //instance.gETSearchAuthority(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gETSearchSubauthority', function() {
      it('should call gETSearchSubauthority successfully', function(done) {
        //uncomment below and update the code to test gETSearchSubauthority
        //instance.gETSearchSubauthority(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('oPTIONSSearchAuthority', function() {
      it('should call oPTIONSSearchAuthority successfully', function(done) {
        //uncomment below and update the code to test oPTIONSSearchAuthority
        //instance.oPTIONSSearchAuthority(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('oPTIONSSearchSubauthority', function() {
      it('should call oPTIONSSearchSubauthority successfully', function(done) {
        //uncomment below and update the code to test oPTIONSSearchSubauthority
        //instance.oPTIONSSearchSubauthority(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
