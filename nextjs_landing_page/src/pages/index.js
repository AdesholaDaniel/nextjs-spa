import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import SignUp from './SignUp'

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <Router>
            <SEO title="TechPro Development Inc." />
            <Banner />
            <Switch>
              <Route path='/' exact/>
              <Route path='/sign-up' component={SignUp}/>
            </Switch>
            <KeyFeature />
            <ServiceSection />
            <Feature />
            <CoreFeature />
            <WorkFlow />
            <Package />
            <TeamSection />
            <TestimonialCard />
            
          </Router>
        </Layout>
    </ThemeProvider>
  );
}
