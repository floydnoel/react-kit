import {
  convertToLink,
  getContentSections,
  getSectionContent,
} from './markdown-utils';

describe('convertToLink', () => {
  it('converts section titles to links', () => {
    expect(convertToLink('# React Kit')).toEqual('react-kit');
    expect(convertToLink('### React Stuff Words')).toEqual('react-stuff-words');
  });
});

describe('getContentSections', () => {
  it('converts a markdown doc to sections', () => {
    expect(getContentSections('# React Kit\n\nstuff')).toEqual({
      'react-kit': ['# React Kit', 'stuff'],
    });
    expect(getContentSections('### React Stuff Words\n\nstuff')).toEqual({
      'react-stuff-words': ['### React Stuff Words', 'stuff'],
    });
  });
});

describe('getSectionContent', () => {
  it('gets a section of content from a markdown document', () => {
    expect(
      getSectionContent({
        content: '# React Kit\n\nstuff\n\n# Other Things\n\nmore stuff',
        section: '#react-kit',
      })
    ).toEqual('# React Kit\n\nstuff');

    expect(
      getSectionContent({
        content: '# React Kit\n\nstuff\n\n# Other Things\n\nmore stuff',
        section: 'react-kit',
      })
    ).toEqual('# React Kit\n\nstuff');

    expect(
      getSectionContent({
        content: '# React Kit\n\nstuff\n\n# Other Things\n\nmore stuff',
        section: '#other-things',
      })
    ).toEqual('# Other Things\n\nmore stuff');

    expect(
      getSectionContent({
        content: '# React Kit\n\nstuff\n\n# Other Things\n\nmore stuff',
        section: 'other-things',
      })
    ).toEqual('# Other Things\n\nmore stuff');
  });
});
