// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIndex from '../../../app/service/index';
import ExportShell from '../../../app/service/shell';

declare module 'egg' {
  interface IService {
    index: ExportIndex;
    shell: ExportShell;
  }
}
