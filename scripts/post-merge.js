#!/usr/bin/env node

const dependencies = require('./utils/dependencies');

if (dependencies.have_changed()) {
  dependencies.show_warning_banner();
}
