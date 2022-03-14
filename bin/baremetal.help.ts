#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BaremetalHelpStack } from '../lib/baremetal.help-stack';

const app = new cdk.App();
new BaremetalHelpStack(app, 'BaremetalHelpStack');
