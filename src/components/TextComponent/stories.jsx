import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Voluptatibus officia fugit aliquid ea consequuntur saepe minima veniam voluptates necessitatibus?
    Quae temporibus rerum eius beatae officiis, vitae ipsa dignissimos eaque in.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
