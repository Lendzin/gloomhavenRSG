import numpy as np
from PIL import Image
import pathlib
import os
from os import listdir
from os.path import isfile, join
import cv2

folder = 'scenario_tiles'
jpgFile = '.jpg'
pngFile = '.png'
webFile = '.webp'
path = 'D:/Gloomhaven_project/gloomhaven-client/public/images/' + folder + '/'

fileNames = [f for f in listdir(path) if isfile(join(path, f))]
for file in range(len(fileNames)):
    filepath = path + fileNames[file]
    image = Image.open(filepath)
    savepath = os.path.splitext(filepath)[0]
    # Image.ANTIALIAS
    # image.save(savepath + webFile, "webp", optimize=True,
    #            quality=90, compress_level=9)
    fill_color = (0, 0, 0)
    im = image.convert('RGBA')
    if im.mode in ('RGBA', 'LA'):
        background = Image.new(im.mode[:-1], im.size, fill_color)
        background.paste(im, im.split()[-1])  # omit transparency
        im = background
    im.convert("RGB").save(savepath + jpgFile)
