"use client";

import { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/store";
import { ActivityType } from "@/types/ActivityType";
import { ActivityTypesType } from "@/types/ActivityTypesType";
import { PerformerType } from "@/types/PerformerType";
import { PitchType } from "@/types/PitchType";
import { PropsType } from "@/types/PropsType";
import { useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function ActivitySchedulerPage() {
  const { activities, performers, activityTypes, pitches, setActivities } =
    useGlobalContext() as PropsType;

  const searchParams = useSearchParams();
  const paramId = searchParams.get("id");

  const [updateActivity, setUpdateActivity] = useState<ActivityType | null>(
    null
  );

  useEffect(() => {
    if (paramId) {
      const activity = activities?.find(
        (activity: ActivityType) => activity.id === parseInt(paramId)
      );

      activity && setUpdateActivity(activity);
    }
  }, [paramId, activities]);

  const validateData = (e: any) => {
    const activity = activities?.find(
      (activity: ActivityType) =>
        activity.datetime === e.target.datetime.value &&
        activity.pitch === e.target.pitch.value
    );

    if (activity) {
      toast.error("Activity already scheduled for this pitch and time");

      return false;
    }

    return true;
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (paramId) {
      const updatedActivity: ActivityType = {
        id: parseInt(paramId),
        activity_type: e.target.activity_type.value,
        performer: e.target.performer.value,
        pitch: e.target.pitch.value,
        datetime: e.target.datetime.value,
      };

      const updatedActivities = activities?.map((activity: ActivityType) =>
        activity.id === parseInt(paramId) ? updatedActivity : activity
      );

      setActivities(updatedActivities || []);

      toast.success("Activity updated successfully");

      return;
    }

    if (!validateData(e)) return;

    const activity: ActivityType = {
      id: activities ? activities.length + 1 : 1,
      activity_type: e.target.activity_type.value,
      performer: e.target.performer.value,
      pitch: e.target.pitch.value,
      datetime: e.target.datetime.value,
    };

    setActivities([...(activities || []), activity]);

    toast.success("Activity added successfully");

    e.target.reset();
  };

  return (
    <div>
      <h1 className="font-light text-5xl text-center">
        {paramId ? "Update" : "Schedule"} Activity
      </h1>

      <form onSubmit={onSubmit} className="my-10 max-w-xl mx-auto">
        <div className="space-y-4">
          <div>
            <label htmlFor="activity_type">Activity Type</label>
            <select
              required
              className="border border-gray-300 rounded-md p-2 w-full"
              id="activity_type"
              name="activity_type"
              defaultValue={updateActivity?.activity_type || ""}
            >
              <option disabled>Select Activity Type</option>
              {activityTypes?.map((type: ActivityTypesType, index: number) => (
                <option key={index} value={type.activity_type}>
                  {type.activity_type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="performer">Select Performer</label>

            <select
              required
              className="border border-gray-300 rounded-md p-2 w-full"
              id="performer"
              name="performer"
              defaultValue={updateActivity?.performer || ""}
            >
              <option disabled>Select Performer</option>
              {performers?.map((performer: PerformerType, index: number) => (
                <option key={index} value={performer.performer}>
                  {performer.performer}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="pitch">Select Pitch</label>
            <select
              required
              className="border border-gray-300 rounded-md p-2 w-full"
              id="pitch"
              name="pitch"
              defaultValue={updateActivity?.pitch || ""}
            >
              <option disabled>Select Pitch</option>

              {pitches?.map((pitch: PitchType, index: number) => (
                <option key={index} value={pitch.pitch}>
                  {pitch.pitch}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="datetime">Set Date and Time</label>
            <input
              required
              defaultValue={updateActivity?.datetime || ""}
              className="border border-gray-300 rounded-md p-2 w-full"
              id="datetime"
              name="datetime"
              type="datetime-local"
            />
          </div>
        </div>

        <button className="bg-primary-100 text-white rounded-md py-4 px-5 mt-10">
          {paramId ? "Update" : "Schedule"}
        </button>
      </form>

      <Toaster />
    </div>
  );
}

export default ActivitySchedulerPage;
