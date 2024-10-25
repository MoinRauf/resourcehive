# cell 1 start

# This Python 3 environment comes with many helpful analytics libraries installed
# It is defined by the kaggle/python Docker image: https://github.com/kaggle/docker-python
# For example, here's several helpful packages to load

import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)

# Input data files are available in the read-only "../input/" directory
# For example, running this (by clicking run or pressing Shift+Enter) will list all files under the input directory

import os
for dirname, _, filenames in os.walk('/kaggle/input'):
    for filename in filenames:
        print(os.path.join(dirname, filename))

# You can write up to 20GB to the current directory (/kaggle/working/) that gets preserved as output when you create a version using "Save & Run All" 
# You can also write temporary files to /kaggle/temp/, but they won't be saved outside of the current session

#cell 1 end

# cell 2 start

import pandas as pd

# Load the dataset
data = pd.read_csv('/kaggle/input/hundred-values/ventilator_training_dataset.csv')  # Adjust the filename if needed
print(data.head())  # Display the first few rows of the dataset

#cell 2 end

# cell 3 start (Algo)

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, Input
from sklearn.metrics import confusion_matrix, classification_report

# 1. Load the dataset
# data = pd.read_csv('/kaggle/input/ventilatot-data/ventilator_training_dataset.csv')  # Adjust the filename if needed
print(data.head())  # Display the first few rows of the dataset

# 2. Data Preprocessing
# Separate features and labels
X = data.drop('Label', axis=1).values  # Features (adjust column name if needed)
y = data['Label'].values  # Labels

# Encode the labels
label_encoder = LabelEncoder()
y = label_encoder.fit_transform(y)

# Split the dataset into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standardize the features
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# 3. Build the Neural Network model
model = Sequential()
model.add(Input(shape=(X_train.shape[1],)))  # Use Input layer
model.add(Dense(64, activation='relu'))
model.add(Dropout(0.5))  # Adding dropout layer for regularization
model.add(Dense(32, activation='relu'))
model.add(Dropout(0.5))  # Adding another dropout layer for regularization
model.add(Dense(1, activation='sigmoid'))  # Output layer for binary classification

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# 4. Train the model
history = model.fit(X_train, y_train, epochs=50, batch_size=32, validation_split=0.1)

# 5. Evaluate the model
loss, accuracy = model.evaluate(X_test, y_test)
print(f'Model Loss: {loss}, Model Accuracy: {accuracy}')

# 6. Make predictions
predictions = (model.predict(X_test) > 0.5).astype("int32")

# 7. Display the results as "Normal" or "Malfunction"
num_samples_to_display = min(5, len(predictions))  # Get the minimum of 5 or the number of predictions
for i in range(num_samples_to_display):
    result = label_encoder.inverse_transform(predictions.flatten())[i]
    actual = label_encoder.inverse_transform(y_test)[i]
    print(f'Test Sample {i}: Predicted: {result}, Actual: {actual}')

# 8. Confusion Matrix and Classification Report
cm = confusion_matrix(y_test, predictions)
cr = classification_report(y_test, predictions)
print("Confusion Matrix:\n", cm)
print("Classification Report:\n", cr)

# 9. Alert Generation based on prolonged parameter changes
def generate_alerts(data):
    # Simulating a scenario where data is a DataFrame with parameter values and their corresponding labels
    # We assume that data is sorted by time (or some sequential index)
    # Create a list to keep track of the alert statuses
    alerts = []

    for index in range(1, len(data)):
        current_reading = data.iloc[index]
        previous_reading = data.iloc[index - 1]

        # Check for malfunction condition
        if current_reading['Label'] == 'Malfunction':
            # Check if the previous 5 readings (which could represent time) are also Malfunction
            if index >= 5 and all(data['Label'].iloc[index-5:index] == 'Malfunction'):
                alert_message = (f"Alert! Malfunction detected at sample {index} "
                                 f"with parameters: {current_reading[:-1].to_dict()}")
                alerts.append(alert_message)

    return alerts

# Generate alerts based on the dataset
alerts = generate_alerts(data)

# Print alerts if any
for alert in alerts:
    print(alert)

# cell 3 end (Algo)