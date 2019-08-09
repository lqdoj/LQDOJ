cho "Setting up..."
cd back-end && pip3 install django-rest-framework && pip3 install django-cors-headers && python3 manage.py migrate 
cd ..
cd fron-tend && yarn install 
cd .. 
echo "Completed setup"