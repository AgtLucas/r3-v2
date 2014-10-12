/**
 * Comments js
 * @jsx React.DOM
 */

  /**
   * Comment itself
   */
  var Comment = React.createClass({
    render: function () {
      return (
        <div className='comment'>
          <h2 className='comment-author'>
            {this.props.author}
          </h2>
          <section className='comment-text'>
            {this.props.comment}
          </section>
        </div>
      );
    }
  });

  /**
   * Comment's list
   */
  var CommentList = React.createClass({
    render: function () {
      var commentNodes = this.props.comments.map(function (comment, index) {
        return (
          <Comment author={comment.author} comment={comment.comment} key={index} />
        );
      });

      return (
        <div className='comment-list'>
          {commentNodes}
        </div>
      );
    }
  });
  var fakeComments = [
    { author: "Lucas", comment: "Hell yeah!" },
    { author: "Lucas", comment: "Hell yeah, again!" }
  ];

  window.onload = function () {
    React.renderComponent(
      <CommentList comments={fakeComments} />,
      document.getElementById('comments')
    );
  };