# Integration with Firestore

Assign: Anonymous

IN Oauth.py:

- You will receive the user id
- Then you can do something along these lines

```python
# Continuing from 1)

# Udpdate:
doc = col_ref.document(item.id) # doc is DocumentReference
field_updates = {"description": "Updated description"}
doc.update(field_updates)

# Create:
import datetime
new_values = {
    "name": "Newbie",
    "description": "Shiny New Document",
    "date": datetime.datetime.now()
}
col_ref.document().create(new_values)
```

- Where field updates includes the following fields
- To access the document id like you would use above
- Do the following

```python
import firebase_admin
from firebase_admin import credentials, firestore
databaseURL = {
     'databaseURL': "https://test-6f02d.firebaseio.com"
}
cred = credentials.Certificate("test.json")
firebase_admin.initialize_app(cred, databaseURL)

database = firestore.client()
col_ref = database.collection('items') # col_ref is CollectionReference
results = col_ref.where('name', '==', 'Pepa').get() # one way to query
results = col_ref.order_by('date',direction='DESCENDING').limit(1).get() # another way - get the last document by date
for item in results:
    print(item.to_dict())
    print(item.id)
# item is DocumentSnapshot
# note: the documentation says get() is depreciated in favour of stream(), however stream() did not work for me
```

- Thank you guy on Stack Overflow

Store under USER (some object)

Store SONG_NAME, SONG_ID, ASSOCIATED_ARTIST_GENRE for each song in top 50

Store ARTIST_NAME and ARTIST_ID for each artist