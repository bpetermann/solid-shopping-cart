import {
  Header,
  Hero,
  Products,
  Newsletter,
  Faqs,
} from '@/components/Organisms';
import type { Component } from 'solid-js';

const Template: Component = () => (
  <>
    <Header />
    <Hero />
    <Products />
    <Newsletter />
    <Faqs />
  </>
);

export default Template;
