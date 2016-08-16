/**
 *  Copyright 2014-2016 Riccardo Massera (TheCoder4.Eu)
 *  
 *  This file is part of BootsFaces.
 *  
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
 */

package net.bootsfaces.render;

/**
 * This class renders an &lt;alert&gt;.
 * The &lt;alert&gt; tag generates a colored box that can be used to display error messages, warnings, informations or simply success messages.
 *
 */

public enum RAlert {
    alert,
    //attrs
    severity,
    title,
    closable,
    //Style
    close,
    fadein,
    value;
    

}
