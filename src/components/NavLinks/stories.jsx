import { NavLink } from '.';
import link from './mock';

export default {
  title: 'NavLink',
  component: NavLink,
  args: {
    links: link,
  },
  argTypes: {
    links: '',
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavLink {...args} />
    </div>
  );
};
