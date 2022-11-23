---
sidebar_label: "Python-Custom-Container"
sidebar_position: 3
---
# Building and Running Your Container On Bacalhau Using Docker


[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/Python-Custom-Container/index.ipynb)
[![Open In Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/Python-Custom-Container/index.ipynb)

## **Introduction**



This example will walk you through building your own docker container and running the container on the bacalhau network and viewing the results


For that we will build a Simple Recommender Script that when Given a movie ID


will recommend other movies based on user ratings.


Suppose if you want recommendations for the movie Toy Story (1995) it will recommend movies from similar categories


```
Recommendations for Toy Story (1995):
1  :  Toy Story (1995)
58  :  Postino, Il (The Postman) (1994)
3159  :  Fantasia 2000 (1999)
359  :  I Like It Like That (1994)
756  :  Carmen Miranda: Bananas Is My Business (1994)
618  :  Two Much (1996)
48  :  Pocahontas (1995)
2695  :  Boys, The (1997)
2923  :  Citizen's Band (a.k.a. Handle with Care) (1977)
688  :  Operation Dumbo Drop (1995)
```




### 
**Downloading the dataset**


Download Movielens1M dataset from this link [https://files.grouplens.org/datasets/movielens/ml-1m.zip](https://files.grouplens.org/datasets/movielens/ml-1m.zip)


In this example we’ll be using 2 files from the MovieLens 1M dataset: ratings.dat and movies.dat. After the dataset is downloaded extract the zip and place ratings.dat and movies.dat into a folder called input

The structure of input directory should be


```
input
├── movies.dat
└── ratings.dat
```




```python
!wget https://files.grouplens.org/datasets/movielens/ml-1m.zip
```

    --2022-09-18 11:01:58--  https://files.grouplens.org/datasets/movielens/ml-1m.zip
    Resolving files.grouplens.org (files.grouplens.org)... 128.101.65.152
    Connecting to files.grouplens.org (files.grouplens.org)|128.101.65.152|:443... connected.
    HTTP request sent, awaiting response... 200 OK
    Length: 5917549 (5.6M) [application/zip]
    Saving to: ‘ml-1m.zip’
    
    ml-1m.zip           100%[===================>]   5.64M  28.7MB/s    in 0.2s    
    
    2022-09-18 11:01:59 (28.7 MB/s) - ‘ml-1m.zip’ saved [5917549/5917549]
    



```python
# Extracting the downlaoded zip file
!unzip ml-1m.zip
```

    Archive:  ml-1m.zip
       creating: ml-1m/
      inflating: ml-1m/movies.dat        
      inflating: ml-1m/ratings.dat       
      inflating: ml-1m/README            
      inflating: ml-1m/users.dat         



```python
#moving  ratings.dat and movies.dat into a folder called 'input'
!mkdir input; mv ml-1m/movies.dat ml-1m/ratings.dat input/
```


### **Installing Dependencies**

Create a requirements.txt for the Python libraries we’ll be using:


```python
%%writefile requirements.txt
numpy
pandas
```

To install the dependencies run the command



```python
!pip install -r requirements.txt
```

### **Writing the Script**

Create a new file called <code><em>similar-movies.py</em></code> and in it paste the following script


```python
%%writefile similar-movies.py
# Imports
import numpy as np
import pandas as pd
import argparse
from distutils.dir_util import mkpath
import warnings
warnings.filterwarnings("ignore")
# Read the files with pandas
data = pd.io.parsers.read_csv('input/ratings.dat',
names=['user_id', 'movie_id', 'rating', 'time'],
engine='python', delimiter='::', encoding='latin-1')
movie_data = pd.io.parsers.read_csv('input/movies.dat',
names=['movie_id', 'title', 'genre'],
engine='python', delimiter='::', encoding='latin-1')

# Create the ratings matrix of shape (m×u) with rows as movies and columns as users

ratings_mat = np.ndarray(
shape=((np.max(data.movie_id.values)), np.max(data.user_id.values)),
dtype=np.uint8)
ratings_mat[data.movie_id.values-1, data.user_id.values-1] = data.rating.values

# Normalise matrix (subtract mean off)

normalised_mat = ratings_mat - np.asarray([(np.mean(ratings_mat, 1))]).T

# Compute SVD

normalised_mat = ratings_mat - np.matrix(np.mean(ratings_mat, 1)).T
cov_mat = np.cov(normalised_mat)
evals, evecs = np.linalg.eig(cov_mat)

# Calculate cosine similarity, sort by most similar and return the top N.

def top_cosine_similarity(data, movie_id, top_n=10):
   
index = movie_id - 1
# Movie id starts from 1
   
movie_row = data[index, :]
magnitude = np.sqrt(np.einsum('ij, ij -> i', data, data))
similarity = np.dot(movie_row, data.T) / (magnitude[index] * magnitude)
sort_indexes = np.argsort(-similarity)
return sort_indexes[:top_n]

# Helper function to print top N similar movies
def print_similar_movies(movie_data, movie_id, top_indexes):
print('Recommendations for {0}: \n'.format(
movie_data[movie_data.movie_id == movie_id].title.values[0]))
for id in top_indexes + 1:
print(str(id),' : ',movie_data[movie_data.movie_id == id].title.values[0])


parser = argparse.ArgumentParser(description='Personal information')
parser.add_argument('--k', dest='k', type=int, help='principal components to represent the movies',default=50)
parser.add_argument('--id', dest='id', type=int, help='Id of the movie',default=1)
parser.add_argument('--n', dest='n', type=int, help='No of recommendations',default=10)

args = parser.parse_args()
k = args.k
movie_id = args.id # Grab an id from movies.dat
top_n = args.n

# k = 50
# # Grab an id from movies.dat
# movie_id = 1
# top_n = 10

sliced = evecs[:, :k] # representative data
top_indexes = top_cosine_similarity(sliced, movie_id, top_n)
print_similar_movies(movie_data, movie_id, top_indexes)
```


What the similar-movies.py script does

* Read the files with pandas
* Create the ratings matrix of shape (m×u) with rows as movies and columns as user
* Normalise matrix (subtract mean off)
* Compute SVD
* Calculate cosine similarity, sort by most similar and return the top N.
* Select k principal components to represent the movies, a movie_id to find recommendations and print the top_n results.

For further reading on how the script works, go to [Simple Movie Recommender Using SVD | Alyssa](https://alyssaq.github.io/2015/20150426-simple-movie-recommender-using-svd/)



### **Running the script**

Running the script  similar-movies.py using the default values you can also use other flags to set your own values



```python
! python similar-movies.py
```



**Setting Up Docker**

In this step you will create a  `Dockerfile` to create your Docker deployment. The `Dockerfile` is a text document that contains the commands used to assemble the image.

First, create the `Dockerfile`.

Next, add your desired configuration to the `Dockerfile`. These commands specify how the image will be built, and what extra requirements will be included.



```python
%%writefile Dockerfile
FROM python:3.8
ADD similar-movies.py .
ADD /input input
COPY ./requirements.txt /requirements.txt
RUN pip install -r requirements.txt
```


We will use the python:3.8 docker image and add our script `similar-movies.py` to copy the script to the docker image, similarly we also add the dataset directory and also the requirements, after that run the command to install the dependencies in the image

The final folder structure will look like this: 


```
├── Dockerfile
├── input
│   ├── movies.dat
│   └── ratings.dat
├── requirements.txt
└── similar-movies.py
```



Build the container

```
docker build -t <hub-user>/<repo-name>:<tag> .
```


Please replace

&lt;hub-user> with your docker hub username, If you don’t have a docker hub account [Follow these instructions to create docker account](https://docs.docker.com/docker-id/), and use the username of the account you created

&lt;repo-name> This is the name of the container, you can name it anything you want

&lt;tag> This is not required but you can use the latest tag

After you have build the container, the next step is to test it locally and then push it docker hub

Before pushing you first need to create a repo which you can create by following the instructions here [https://docs.docker.com/docker-hub/repos/](https://docs.docker.com/docker-hub/repos/)

Now you can push this repository to the registry designated by its name or tag.


```
 docker push <hub-user>/<repo-name>:<tag>
```


After the repo image has been pushed to docker hub, we can now use the container for running on bacalhau


```
bacalhau docker run <hub-user>/<repo-name>:<tag> -- python similar-movies.py
```

## **Running the container on bacalhau**

You can either run the container on bacalhau with default or custom parameters

Running the container with default parameters


Insalling bacalhau


```python
!curl -sL https://get.bacalhau.org/install.sh | bash
```

    Your system is linux_amd64
    No BACALHAU detected. Installing fresh BACALHAU CLI...
    Getting the latest BACALHAU CLI...
    Installing v0.2.3 BACALHAU CLI...
    Downloading https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_linux_amd64.tar.gz ...
    Downloading sig file https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_linux_amd64.tar.gz.signature.sha256 ...
    Verified OK
    Extracting tarball ...
    NOT verifying Bin
    bacalhau installed into /usr/local/bin successfully.
    Client Version: v0.2.3
    Server Version: v0.2.3


Command to run the container on bacalhau


```bash
bacalhau docker run \
--id-only \
--wait \
jsace/python-similar-movies \
 -- python similar-movies.py
```

    7523cbaf-7a17-4f52-8c6d-2fcc91df653e



Running the commands will output a UUID (like `54506541-4eb9-45f4-a0b1-ea0aecd34b3e`). This is the ID of the job that was created. You can check the status of the job with the following command:


Running the container with custom 
parameters (Optional)

```
bacalhau docker run \
jsace/python-similar-movies \
-- python similar-movies.py --k 50 --id 10 --n 10
```


```bash
bacalhau list --id-filter ${JOB_ID}
```

    [92;100m CREATED  [0m[92;100m ID       [0m[92;100m JOB                     [0m[92;100m STATE     [0m[92;100m VERIFIED [0m[92;100m PUBLISHED               [0m
    [97;40m 12:14:59 [0m[97;40m ab354ccc [0m[97;40m Docker jsace/python-... [0m[97;40m Published [0m[97;40m          [0m[97;40m /ipfs/bafybeihybfivi... [0m



Where it says "`Completed `", that means the job is done, and we can get the results.

To find out more information about your job, run the following command:


```bash
bacalhau describe ${JOB_ID}
```

If you see that the job has completed and there are no errors, then you can download the results with the following command:


```bash
rm -rf results && mkdir -p results
bacalhau get $JOB_ID --output-dir results
```

    Fetching results of job '94774248-1d07-4121-aac8-451aca4a636e'...
    Results for job '94774248-1d07-4121-aac8-451aca4a636e' have been written to...
    results


    2022/11/12 10:20:09 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.


The structure of the files and directories will look like this:
```
├── shards
│   └── job-940c7fd7-c15a-4d00-8170-0d138cdca7eb-shard-0-host-QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL
│       ├── exitCode
│       ├── stderr
│       └── stdout
├── stderr
├── stdout
└── volumes
    └── outputs
```

* stdout contains things printed to the console like outputs, etc.

* stderr contains any errors. In this case, since there are no errors, it's will be empty

* Volumes folder contain the volumes you named when you started the job with the `-o` flag. In addition, you will always have a `outputs` volume, which is provided by default.

Because your script is printed to stdout, the output will appear in the stdout file. You can read this by typing the following command:





```python
!cat  results/combined_results/outputs
```

    Recommendations for GoldenEye (1995): 
    
    10  :  GoldenEye (1995)
    16  :  Casino (1995)
    7  :  Sabrina (1995)
    733  :  Rock, The (1996)
    648  :  Mission: Impossible (1996)
    1049  :  Ghost and the Darkness, The (1996)
    13  :  Balto (1995)
    839  :  Crow: City of Angels, The (1996)
    977  :  Moonlight Murder (1936)
    349  :  Clear and Present Danger (1994)

