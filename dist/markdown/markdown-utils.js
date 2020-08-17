let convertToLink = sectionTitle => {
  return sectionTitle.toLowerCase().split(' ').slice(1).join('-');
};

let getContentSections = content => {
  let result = {};
  let cur = '';
  content.split('\n\n').forEach(e => {
    if (e.indexOf('#') === 0) {
      let link = convertToLink(e);
      cur = link;
      result[link] = [e];
    } else if (cur) {
      result[cur] = [...result[cur], e];
    }
  });
  return result;
};

let getSectionContent = ({
  content,
  section
}) => {
  let key = section.indexOf('#') === 0 ? section.slice(1) : section;
  return getContentSections(content)[key]?.join('\n\n') || '';
};

export { convertToLink, getContentSections, getSectionContent };
//# sourceMappingURL=markdown-utils.js.map