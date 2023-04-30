import { ActivityType } from "./ActivityType";
import { ActivityTypesType } from "./ActivityTypesType";
import { PerformerType } from "./PerformerType";
import { PitchType } from "./PitchType";

export interface PropsType {
  activities?: ActivityType[];
  performers?: PerformerType[];
  activityTypes?: ActivityTypesType[];
  pitches?: PitchType[];
  setActivities?: (activities: ActivityType[]) => void;
}
