import {
  Header,
  Hero,
  Products,
  Newsletter,
  Faqs,
} from '@/components/Organisms';
import type { Component } from 'solid-js';

const Template: Component = () => (
  <main>
    <Hero />
    <Products />
    <Newsletter />
    <Faqs />
  </main>
);

export default Template;
