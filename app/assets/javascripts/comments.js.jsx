/**
 * Comments js
 * @jsx React.DOM
 */

var app = (function (window, document, undefined) {

  'use strict';

  var app = {};

  app.init = function () {
    window.onload = function () {
      app.helloWorld();
    }
  };

  app.helloWorld = function () {
    var HelloWorld = React.createClass({
      render: function () {
        return (
          <div className='HelloWorld'>
            Hello, World!
          </div>
        );
      }
    });
    React.renderComponent(
      <HelloWorld />,
      document.getElementById('comments')
    );
  };

  return app.init();

})(window, document);