import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
/* import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
 import ClassicEditor from '@ckeditor/ckeditor5-build-classic';*/
//var newdata = ""




class App extends Component {
    constructor(props) {
        super(props);
        this.clickFunction = this.clickFunction.bind(this);
        
      }  clickFunction() {
        console.log(this.newdata);
      }
      editor = null;
      newdata = null;
    
    render() {
        return (
            <div className="App">
                  <button onClick={this.clickFunction}>Spara</button>
                <h2>CKEditor 5 using a custom build - decoupled editor</h2>
                <CKEditor
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );
                        console.log(editor.getData() );
                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                        this.newdata = editor.getData()
                        this.editor = editor;
                    } }
                    onError={ ( { willEditorRestart } ) => {
                        // If the editor is restarted, the toolbar element will be created once again.
                        // The `onReady` callback will be called again and the new toolbar will be added.
                        // This is why you need to remove the older toolbar.
                        if ( willEditorRestart ) {
                            this.editor.ui.view.toolbar.element.remove();
                        }
                    } }
                    onChange={ ( event, editor ) => {
                        console.log( { event, editor } );
                        this.newdata = editor.getData();
                        console.log(this.newdata); 
                    } }
                    editor={ DecoupledEditor }
                    data="<p>Hello from CKEditor 5's decoupled editor!</p>"
                    //config={{
                    //    plugins: [ Paragraph, Bold, Italic, Essentials ],
                    //    toolbar: [ 'bold', 'italic' ]
                    //}}
                />
                </div>
        );
}
}

export default App;
