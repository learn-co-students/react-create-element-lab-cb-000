import { expect } from 'chai';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import meInReact from '../src/index';

Enzyme.configure({ adapter: new Adapter() })

describe('You in React', () => {
  describe('Parent element', () => {
    it('should have the right class', () => {
      expect(meInReact.props.className).to.equal('me');
    });

    it('should have three children', () => {
      expect(meInReact.props.children.length).to.equal(3);
    });
  });

  describe('Title', () => {
    let element;

    before(() => {
      element = meInReact.props.children[0];
    });

    it('should have the right tag', () => {
      expect(element.type).to.equal('h1');
    });

    it('should contain the right text', () => {
      expect(element.props.children).to.equal('An Awesome Person');
    });
  });

  describe('Tagline', () => {
    let element;

    before(() => {
      element = meInReact.props.children[1];
    });

    it('should have the right tag', () => {
      expect(element.type).to.equal('p');
    });

    it('should contain the right text', () => {
      expect(element.props.children).to.equal('Who is learning React');
    });
  });

  describe('Interests', () => {
    let element;

    before(() => {
      element = meInReact.props.children[2];
    });

    it('should have the right tag', () => {
      expect(element.type).to.equal('ul');
    });

    it('should have the right class', () => {
      expect(element.props.className).to.equal('my-interests');
    });

    it('should have four children', () => {
      expect(element.props.children.length).to.equal(4);
    });

    it('should have the right interests', () => {
      expect(element.props.children[0].props.children).to.equal('JavaScript');
      expect(element.props.children[1].props.children).to.equal('React');
      expect(element.props.children[2].props.children).to.equal('Movies');
      expect(element.props.children[3].props.children).to.equal('Ice cream');
    });
  });
});
