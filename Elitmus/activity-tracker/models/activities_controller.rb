class ActivitiesController < ApplicationController
    before_action :authenticate_user
  
    def create
      activity = current_user.activities.create(activity_params)
      if activity.save
        render json: activity, status: :created
      else
        render json: activity.errors, status: :unprocessable_entity
      end
    end
  
    private
  
    def activity_params
      params.require(:activity).permit(:url, :duration)
    end
  end
  