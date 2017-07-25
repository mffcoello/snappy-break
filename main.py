#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import jinja2
import webapp2
import os
from google.appengine.ext import ndb
from datetime import datetime
from oauth2client.contrib.appengine import OAuth2Decorator
from apiclient.discovery import build


env=jinja2.Environment(loader=jinja2.FileSystemLoader('templates'))
decorator = OAuth2Decorator(
    client_id="872407350122-lpgqsuvleum7fqq6tukbnush5qav5ea8.apps.googleusercontent.com",
    client_secret="NHaw6gqhfK6HtoQrhYX_idGm",
    scope='https://www.googleapis.com/auth/calendar.readonly')

service = build('calendar', 'v3')


class homePage(webapp2.RequestHandler):
    def get(self):
        template = env.get_template('homePage.html')
        self.response.write(template.render())

class calendarHandler(webapp2.RequestHandler):
    @decorator.oauth_required
    def get(self):
        http = decorator.http()
        # Call the service using the authorized Http object.
        request = service.events().list(calendarId='primary')
        response = request.execute(http=http)
        self.response.write("%s" % response["items"])



app = webapp2.WSGIApplication([
    ('/', homePage),
    ('/event', calendarHandler),
    (decorator.callback_path, decorator.callback_handler()),
], debug=True)
