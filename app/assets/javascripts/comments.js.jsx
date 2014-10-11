/**
 * Comments js
 * @jsx React.DOM
 */

var app = (function (window, document, undefined) {

  'use strict';

  var app = {};

  app.init = function () {
    this.helloWorld();
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
    window.onload = function () {
      React.renderComponent(
        <HelloWorld />,
        document.getElementById('comments')
      );
    }
  };

  return app.init();

})(window, document);