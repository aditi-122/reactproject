function customeRender(reactElement,container){
   /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)*/
    //we have to create loop based code.
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
        if(prop === 'Children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const reactElement = {
    type: 'a',//it show which type of element is
    props: {
        href: 'https://google.com',
        target: '_blank'

    },
    Children: 'Click me to visit google'//this the work of react we are creating this to understand the react working
}
const mainContainer = document.querySelector('#root')// this element injected inside the root or render the element.
customeRender(reactElement,mainContainer)
//i want to render a tag how react see
//how react will see after compiling.
//what we given it will create a tree like structure.

