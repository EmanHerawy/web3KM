import template from 'lodash/template';

const outputElement = document.getElementById('output');
if (outputElement) {
  var compiled = template(`
    <h1><%- heading %></h1>
    Current date and time: <%- dateTimeString %>
  `.trim());
  outputElement.innerHTML = compiled({
    heading: 'Web3 Key Management Demo',
    dateTimeString: new Date().toISOString(),
  });
}
