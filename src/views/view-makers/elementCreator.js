export function elementCreator(params) {
  const element = document.createElement(params.tagName);
  element.className = params.className;
  element.setAttribute('id', params.id);
  element.setAttribute('type', params.type);
  element.setAttribute('placeholder', params.placeholder);
  element.setAttribute('for', params.labelFor);
  element.setAttribute('value', params.value);
  element.setAttribute('name', params.name);
  element.setAttribute('required', '');

  element.innerText = params.elementInnerText;

  return element;
}

export function createListContent(contentModel) {
  const contentList = [];

  contentModel.forEach((element) => {
    const node = elementCreator({
      tagName: element.tagName,
      className: element.className,
      id: element.id,
      type: element.type,
      value: element.value,
      name: element.name,
      placeholder: element.placeholder,
      elementInnerText: element.elementInnerText,
      labelFor: element.labelFor,
      optionName: element.optionName,
      required: element.required,
    });

    contentList.push(node);
  });

  return contentList;
}
