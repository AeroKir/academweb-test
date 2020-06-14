export function elementCreator(params) {
  const element = document.createElement(params.tagName);
  element.className = params.className;
  element.setAttribute('id', params.id);
  element.setAttribute('type', params.type);
  element.setAttribute('placeholder', params.placeholder);
  element.setAttribute('for', params.labelFor);
  element.setAttribute('value', params.value);
  element.setAttribute('name', params.name);
  element.setAttribute('required', params.required);

  element.innerText = params.elementInnerText;

  return element;
}

export function createListContent(contentModel) {
  const contentList = [];

  contentModel.forEach((element) => {
    const node = elementCreator({
      tagName: element.tagName,
      className: element.className,
      type: element.type,
      placeholder: element.placeholder,
      elementInnerText: element.elementInnerText,
      labelFor: element.labelFor,
      id: element.id,
      value: element.value,
      name: element.name,
      optionName: element.optionName,
      required: element.required,
    });

    contentList.push(node);
  });

  return contentList;
}
