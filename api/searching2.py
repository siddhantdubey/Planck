import glob

directory = "./"
pathname = directory + "/**/*.md"
files = glob.glob(pathname, recursive=True)
print(files)