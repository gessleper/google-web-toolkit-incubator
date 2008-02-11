/*
 * Copyright 2007 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package com.google.gwt.libideas.resources.rebind;

import com.google.gwt.core.ext.TreeLogger;
import com.google.gwt.core.ext.UnableToCompleteException;
import com.google.gwt.core.ext.typeinfo.JMethod;

/**
 * Encapsulates per-type resource generation logic.
 */
public abstract class ResourceGenerator {

  /**
   * Default no-op implementation.
   * 
   * @param logger the TreeLogger to use when recording events for the method
   * @throws UnableToCompleteException
   */
  public void finish(TreeLogger logger) throws UnableToCompleteException {
  }

  public abstract void init(TreeLogger logger, ResourceContext context)
      throws UnableToCompleteException;

  /**
   * Default no-op implementation.
   * 
   * @param logger the TreeLogger to use when recording events for the method
   * @throws UnableToCompleteException
   */
  public void prepare(TreeLogger logger, JMethod method)
      throws UnableToCompleteException {
  }

  public abstract void writeAssignment(TreeLogger logger, JMethod method)
      throws UnableToCompleteException;

  /**
   * Default no-op implementation.
   * 
   * @param logger the TreeLogger to use when recording events for the method
   * @throws UnableToCompleteException
   */
  public void writeFields(TreeLogger logger) throws UnableToCompleteException {
  }
}