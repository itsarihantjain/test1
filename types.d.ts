type Carousel = {
    background: string;
    image: string;
    heading: string;
    description: string;
    backgroundImage:string,
    nameImage:string ,
    productImage: string,
}

type ButtonProps = {
    onClick?: () => void;
    text: string;
    icon?: string;
    iconWidth?: number;
    iconHeight?: number;
    bg?: string;
    border?: string;
    textColor?: string;
    reverse?: boolean;
    gap?: string
  }

type Benefits = {
    icon: string;
    heading: string;
    description: string;
}

type Natural = {
    icon: string;
    heading: string;
    description: string;
    reverse?: boolean;
}
  
  