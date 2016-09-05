describe('You in React', function () {
  describe('Parent element', function () {
    it('should have the right class', function () {
      expect(meInReact.props.className).toEqual('me');
    });

    it('should have three children', function () {
      expect(meInReact.props.children.length).toEqual(3);
    });
  });

  describe('Title', function () {
    let element;

    before(() => {
      element = meInReact.props.children[0];
    });

    it('should have the right tag', function () {
      expect(element.type).toEqual('h1');
    });

    it('should contain the right text', function() {
      expect(element.props.children).toEqual('An Awesome Person');
    });
  });

  describe('Tagline', function () {
    let element;

    before(() => {
      element = meInReact.props.children[1];
    });

    it('should have the right tag', function() {
      expect(element.type).toEqual('p');
    });

    it('should contain the right text', function() {
      expect(element.props.children).toEqual('Who is learning React');
    });
  });

  describe('Interests', function () {
    let element;

    before(() => {
      element = meInReact.props.children[2];
    });

    it('should have the right tag', function() {
      expect(element.type).toEqual('ul');
    });

    it('should have four children', function() {
      expect(element.props.children.length).toEqual(4);
    });

    it('should have the right interests', function() {
      expect(element.props.children[0].props.children).toEqual('JavaScript');
      expect(element.props.children[1].props.children).toEqual('React');
      expect(element.props.children[2].props.children).toEqual('Movies');
      expect(element.props.children[3].props.children).toEqual('Ice cream');
    });
  });
});
