import type { Component } from 'solid-js';
import { Header, Hero, Products, Newsletter } from '@/components/Organisms';

const Template: Component = () => (
  <>
    <Header />
    <Hero />
    <Products />
    <Newsletter />
  </>
);

export default Template;
