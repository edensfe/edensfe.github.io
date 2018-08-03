import edu.cmu.ri.createlab.terk.robot.finch.Finch;

public class sweepRoom {
	   public static void main(final String[] args) {
	Finch myFinch = new Finch();
	
	while(!myFinch.isBeakDown()) {
		/*Using only the left light sensor to simplify the loop, as the right sensor is in essentially the same location.*/
		int left = myFinch.getLeftLightSensor();
/* If the light level is low, beep is lowest. Note that a "less than/greater than " error was fixed here*/
		if (left > 0 && left < 20) {
			myFinch.buzz(523, 300);
		}
		/* Finch then increases tone of beep as light level increases.*/
		else if(left > 20 && left < 40) {
			myFinch.buzz(659, 300);
		}
		else if(left > 40 && left < 60) {
			myFinch.buzz(750, 300);
		}
		else if(left > 60 && left < 80 ) {
			myFinch.buzz(880, 300);
		}
		else {
			myFinch.buzz(1047, 300);
		}
		/*Finch detects an obstacle on the left*/
		if(myFinch.isObstacleLeftSide()) {
			/*Set LED to red*/
			myFinch.setLED(10, 0, 0);
			/*Make loud noise to indicate obstacle detected.*/
			myFinch.buzz(1047, 600);
			/*Backs up*/
			myFinch.setWheelVelocities(-100,-100, 725);
			/*Turns right to avoid*/
			myFinch.setWheelVelocities(100, -200, 700);
		}
		/* Finch detects object on the right and avoids. */
		else if(myFinch.isObstacleRightSide()) {
			/*Finch sets light to red*/
			myFinch.setLED(10, 0, 0);
			/*Make loud noise to indicate obstacle detected.*/
			myFinch.buzz(1047, 600);
			/*Finch backs up*/
			myFinch.setWheelVelocities(-100, -100, 725);
			/*Finch turns left to avoid*/
			myFinch.setWheelVelocities(-200, 100, 700);
		}
		/*No object is detected*/
		else {
			/*LED set to green*/
			myFinch.setLED(0, 10, 0);
			/*Sets the wheel velocity to constant*/
			myFinch.setWheelVelocities(100, 100);
			/* Commenting out below code, as it is essentially negligible with the Finch's limited hardware and complicates the loop.
			 * Could be something worth exploring with better hardware, hence I am not totally deleting the code. 
			 * double speed = myFinch.getXAcceleration();

			if (-0.45 < speed) {
				myFinch.setWheelVelocities(110, 110);
			}
			else if (-0.47 > speed) {
				myFinch.setWheelVelocities(90, 90);
			}
			else
				myFinch.setWheelVelocities(100, 100);		
					
				}
		}*/
			
	   }
		
	}
   }
}


			


