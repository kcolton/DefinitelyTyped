// Type definitions for Angular JS 1.0.2 (ngResource module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="angular-1.0.2.d.ts" />

///////////////////////////////////////////////////////////////////////////////
// ngResource module (angular-resource.js)
///////////////////////////////////////////////////////////////////////////////
module ng.resource {

    ///////////////////////////////////////////////////////////////////////////
    // ResourceService
    // see http://docs.angularjs.org/api/ngResource.$resource
    // Most part of the following definitions were achieved by analyzing the
    // actual implementation, since the documentation doesn't seem to cover
    // that deeply.
    ///////////////////////////////////////////////////////////////////////////
    interface IResourceService {
        (url: string, paramDefaults?: any, actionDescriptors?: any): IResourceClass;
    }

    // Just a reference to facilitate describing new actions
    interface IActionDescriptor {        
        method: string;
        isArray?: bool;
        params?: any;        
        headers?: any;
    }
    
    // Baseclass for everyresource with default actions.
    // If you define your new actions for the resource, you will need
    // to extend this interface and typecast the ResourceClass to it.
    interface IResourceClass {
        get: IActionCall;
        save: IActionCall;
        query: IActionCall;
        remove: IActionCall;
        delete: IActionCall;
    }

    // In case of passing the first argument as anything but a function,
    // it's gonna be considered data if the action method is POST, PUT or
    // PATCH (in other words, methods with body). Otherwise, it's going
    // to be considered as parameters to the request.
    interface IActionCall {
        (): IResource;
        (dataOrParams: any): IResource;
        (dataOrParams: any, success: Function): IResource;
        (success: Function, error?: Function): IResource;
        (params: any, data: any, success?: Function, error?: Function): IResource;
    }

    interface IResource {        
        $save: IActionCall;
        $remove: IActionCall;
        $delete: IActionCall;

        // No documented, but they are there, just as any custom action will be
        $query: IActionCall;
        $get: IActionCall;
    }

}
