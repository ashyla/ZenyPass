var React = require('react');
var ReactDom = require('react-dom');
var ReactFireMixin = require('reactfire');

var Suggestions = React.createClass({

  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      ListTags: ['Réseaux sociaux','Shopping', 'Personnel', 'Jeux', 'Finance', 'Famille']
    }
  },
  // componentWillMount: function () {
  //   var tag = firebase.database().ref('Tags');
  //   this.bindAsArray(tag, "ListTags");
  // },
  render: () => {
    return(
    <span>
      { tags.map((tag,i) => {
        ({ i, tag })
        })
      }
    </span>
    )
  }
});

export default Suggestions;
