import {DisplayProcessor, SpecReporter, StacktraceOption} from "jasmine-spec-reporter";

import SuiteInfo = jasmine.SuiteInfo;

class CustomProcessor extends  DisplayProcessor{
  public displayJasmineStarted(info: SuiteInfo, log: string): string {
    return `${log}`
  }

}