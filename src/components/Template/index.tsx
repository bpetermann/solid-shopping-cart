import { Hero, Products, Newsletter, Faqs } from '@/components/Organisms';
import { Component } from 'solid-js';

const Template: Component<{
  category: { id: number; name: string };
  value: string;
}> = (props) => {
  return (
    <main>
      <Hero />
      <Products category={props.category} value={props.value} />
      <Newsletter />
      <Faqs />
    </main>
  );
};

export default Template;
