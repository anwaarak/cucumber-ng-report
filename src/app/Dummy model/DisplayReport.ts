import { Before } from './Before';
import { After } from './After';
import { Step } from "./Step";

export interface DisplayReport
{
    id: string;
    before: Before;
    steps: Step;
    type: string;
    after: After;
}
