// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseController from '../../../app/controller/baseController';
import ExportIndex from '../../../app/controller/index';
import ExportWebHook from '../../../app/controller/webHook';

declare module 'egg' {
  interface IController {
    baseController: ExportBaseController;
    index: ExportIndex;
    webHook: ExportWebHook;
  }
}
