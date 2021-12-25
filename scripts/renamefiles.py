import os
import sys
import glob

for subdir, dirs, files in os.walk(r'C:\Users\siddh\Documents\Projects\Planck\api\data\notiondata\Dashboard e82845f4f4be49a9a94f1ca58b23ed7c\Tutoring 5880a1b16cfa461196873f8435f04c49\Tejas 79df4459f2134d7ca34c73ef878a822e'):
    for filename in files:
        filepath = subdir + os.sep + filename
    
        r = filepath.replace(" ", "")
        os.rename(filepath, r)
        print("success!")
        # try:
        #     with open(filepath, 'r') as f:
        #         pass
        # except:
        #     print("Error opening file: {}".format(filepath))
        #     continue