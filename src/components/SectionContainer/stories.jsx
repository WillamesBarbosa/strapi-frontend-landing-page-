import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vitae aspernatur quo alias. Eveniet veritatis
          nesciunt incidunt nihil officia fuga iste quis, nobis suscipit eaque quos similique doloribus pariatur
          voluptatum?
        </p>
      </div>
    ),
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
