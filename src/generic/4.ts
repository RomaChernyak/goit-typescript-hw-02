/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IComponent {
  title: string,
  content?: string,
}

class Component<T> {
  constructor (public props:T) {
    
  }
}

class Page extends Component<IComponent> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};