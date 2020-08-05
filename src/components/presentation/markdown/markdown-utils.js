const convertToLink = (sectionTitle) => {
  return sectionTitle.toLowerCase().split(' ').slice(1).join('-');
};

const getContentSections = (content) => {
  const result = {};
  let cur = '';
  content.split('\n\n').forEach((e) => {
    if (e.indexOf('#') === 0) {
      const link = convertToLink(e);
      cur = link;
      result[link] = [e];
    } else {
      result[cur] = [...result[cur], e];
    }
  });
  return result;
};

const getSectionContent = ({ content, section }) => {
  const key = section.indexOf('#') === 0 ? section.slice(1) : section;
  return getContentSections(content)[key].join('\n\n');
};

export { convertToLink, getContentSections, getSectionContent };
