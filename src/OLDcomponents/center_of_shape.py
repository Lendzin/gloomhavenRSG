# import the necessary packages
import argparse
import imutils
import cv2
import numpy as np
# construct the argument parse and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-i", "--image", required=True,
                help="path to the input image")
args = vars(ap.parse_args())
# load the image, convert it to grayscale, blur it slightly,
# and threshold it
imgOrig = args["image"]
image = cv2.imread(args["image"])
lap = cv2.Laplacian(image, cv2.CV_8UC1, ksize=3)
imgray = cv2.cvtColor(lap, cv2.COLOR_BGR2GRAY)
ret, thresh = cv2.threshold(imgray, 127, 255, 0)
contours, hierarchy = cv2.findContours(
    thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_NONE)
size = image.shape
m = np.zeros(size, dtype=np.uint8)
for i, cnt in enumerate(contours):
    if cv2.contourArea(cnt) >= 1:

        # cnt = Your contour to be approximated
        points_wanted = 6
        precision = 10000
        for x in range(precision):
            epsilon = (x/precision)*cv2.arcLength(cnt, True)
            approx = cv2.approxPolyDP(cnt, epsilon, True)
            if approx.shape[0] == points_wanted:
                color = (255, 255, 255)
                cv2.drawContours(m, cnt, -1, color, -1)
                break

cv2.imwrite(str(imgOrig)+"contours.jpg", m)
# gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
# blurred = cv2.GaussianBlur(gray, (5, 5), 0)
# thresh = cv2.threshold(blurred, 60, 255, cv2.THRESH_BINARY)[1]
# # find contours in the thresholded image
# cnts = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL,
#                         cv2.CHAIN_APPROX_SIMPLE)
# cnts = imutils.grab_contours(cnts)
# # loop over the contours
# for c in cnts:
#     # compute the center of the contour
#     M = cv2.moments(c)
#     cX = int(M["m10"] / M["m00"])
#     cY = int(M["m01"] / M["m00"])
#     # draw the contour and center of the shape on the image
#     cv2.drawContours(image, [c], -1, (0, 255, 0), 2)
#     cv2.circle(image, (cX, cY), 7, (255, 255, 255), -1)
#     cv2.putText(image, "center", (cX - 20, cY - 20),
#                 cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2)
#     # show the image
#     cv2.imshow("Image", image)
#     cv2.waitKey(0)
