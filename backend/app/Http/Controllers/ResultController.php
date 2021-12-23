<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use File;
use ZipArchive;
use RecursiveIteratorIterator;
use RecursiveDirectoryIterator;
use FilesystemIterator;

class ResultController extends Controller
{
    public function saveGiftResult(Request $request) {
        set_time_limit(300);
        $results = json_decode($request->giftList, true);
        $pdf_data = '
            <!DOCTYPE html>
                <html>
                <head>
                    <title>Gift Exchange Result</title>
                    <meta charset="UTF-8">
                    <style>
                    body {
                        font-family: Arial, Helvetica, sans-serif;
                        letter-spacing: 0.2px;
                    }
                    h1 {
                        text-align: center;
                    }
                    table { 
                        border-collapse: collapse; 
                        text-align: center; 
                        width: 100%;
                        margin-left: -1px;
                    }
                    table thead th {
                        background-color:#D60B0B; 
                        color:#FFFFFF; 
                        font-size: 20px; 
                        font-weight: bold; 
                        border: 1px solid #EEE7DB;
                        padding: 10px 0;
                    }
                    table tbody td { 
                        color: #000000; 
                        border: 1px solid #EEE7DB;
                        font-size: 14px;
                        font-weight: normal;
                        padding: 10px 0;
                    }
                    table thead tr th:first-child {
                        border-left: 1px solid #EEE7DB;
                    }
                    table tbody tr td:first-child {
                        border-left: 1px solid #EEE7DB;
                    }
                    table tbody tr:nth-child(even) td { 
                        background: #F5C8BF; 
                        color: #000000; 
                    }
                    </style>
                </head>
                <body>
                    <h1>SCM Christmas Event Gift Exchange Result</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Received Gifts</th>
                            </tr>
                        </thead>
                        <tbody>';
        $count = 1;
        foreach ($results as $result) {
            $pdf_data .= '<tr>
                <td>'.$count.'</td>
                <td>'.$result["name"].'</td>
                <td>'.$result["gift"].'</td>
            </tr>';
            $count++;
        }
        $pdf_data .= '</tbody>
                    </table>
                </body>
                </html>';
        
        $mpdf = new \Mpdf\Mpdf([
            "margin_left" => 10,
            "margin_right" => 10,
            "margin_top" => 15,
            "margin_bottom" => 20,
            "margin_header" => 10,
            "margin_footer" => 10
        ]);

        $mpdf->WriteHTML($pdf_data);
        $file_path_1 = "storage/results_".Carbon::now()->format("Y_m_d");
        if (!file_exists($file_path_1)) {
            File::makeDirectory($file_path_1);
        }
        $file_path_2 = "gift_result_".Carbon::now()->format("Y_m_d");
        $file_path = $file_path_1."/".$file_path_2;
        if (!file_exists($file_path)) {
            File::makeDirectory($file_path);
        }
        
        $username = strtolower($request->username);
        $username = preg_replace("/\s+/", "_", $username);
        $file_name = $file_path."/gift_result_".$username."_".Carbon::now()->format("Y_m_d_H_i").".pdf";
        $mpdf->Output($file_name, 'F');

        return response()->json([
            "message" => "success"
        ]);
    }

    public function saveNomikaiResult(Request $request) {
        set_time_limit(300);
        $results = json_decode($request->groupList, true);
        $pdf_data = '
            <!DOCTYPE html>
                <html>
                <head>
                    <title>Nomikai Result</title>
                    <meta charset="UTF-8">
                    <style>
                    @font-face {
                        font-family: ipag;
                    }
                    body {
                        font-family: Arial, Helvetica, ipag, sans-serif;
                        letter-spacing: 0.2px;
                    }
                    h1 {
                        text-align: center;
                    }
                    table { 
                        border-collapse: collapse; 
                        text-align: center; 
                        width: 100%;
                        margin-left: -1px;
                    }
                    table thead th {
                        background-color:#25405F; 
                        color:#FFFFFF; 
                        font-size: 30px; 
                        font-weight: bold; 
                        border: 1px solid #EEE7DB;
                        padding: 10px 0;
                    }
                    table tbody td { 
                        color: #000000; 
                        border: 1px solid #EEE7DB;
                        font-size: 20px;
                        font-weight: normal;
                        padding: 10px 0;
                    }
                    table thead tr th:first-child {
                        border-left: 1px solid #EEE7DB;
                    }
                    table tbody tr td:first-child {
                        width: 10%;
                        border-left: 1px solid #EEE7DB;
                    }
                    table tbody tr:nth-child(even) td { 
                        background: #CFCFFF; 
                        color: #000000; 
                    }
                    table tbody tr td:nth-child(2) {
                        width: 30%;
                    }
                    table tbody tr td:nth-child(3) {
                        text-align: left;
                        width: 48%;
                        padding: 10px;
                    }
                    table tbody tr td:nth-child(4) {
                        padding: 10px;
                        width: 12%;
                    }
                    </style>
                </head>
                <body>
                    <h1>SCM Nomikai Result</h1>
                    <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Leader</th>
                                <th>Members</th>
                                <th>Meet Link</th>
                            </tr>
                        </thead>
                        <tbody>';
        $count = 1;
        foreach ($results as $result) {
            $pdf_data .= '<tr>
                <td>'.$count.'</td>
                <td>'.$result["leader"].'</td>
                <td><ul>';
            foreach($result["members"] as $member) {
                $pdf_data .= '<li>'.$member.'</li>';
            }
            $pdf_data .= '</ul></td>
                <td>'.$result["meet_link"].'</td>
            </tr>';
            $count++;
        }
        $pdf_data .= '</tbody>
                    </table>
                    </div>
                </body>
                </html>';
        
        $mpdf = new \Mpdf\Mpdf([
            "margin_left" => 10,
            "margin_right" => 10,
            "margin_top" => 15,
            "margin_bottom" => 20,
            "margin_header" => 10,
            "margin_footer" => 10,
            "default_font" => "ipag",
        ]);

        $mpdf->WriteHTML($pdf_data);
        $file_path_1 = "storage/results_".Carbon::now()->format("Y_m_d");
        if (!file_exists($file_path_1)) {
            File::makeDirectory($file_path_1);
        }
        $file_path_2 = "nomikai_result_".Carbon::now()->format("Y_m_d");
        $file_path = $file_path_1."/".$file_path_2;
        if (!file_exists($file_path)) {
            File::makeDirectory($file_path);
        }
        
        $username = strtolower($request->username);
        $username = preg_replace("/\s+/", "_", $username);
        $file_name = $file_path."/nomikai_result_".$username."_".Carbon::now()->format("Y_m_d_H_i").".pdf";
        $mpdf->Output($file_name, 'F');

        return response()->json([
            "message" => "success"
        ]);
    }

    public function saveZip(Request $request) {
        $file_path = "storage/results_".Carbon::now()->format("Y_m_d");
   
        if (file_exists($file_path)) {
            $zip = new ZipArchive;
            $zip_file_name = "storage/results_".Carbon::now()->format("Y_m_d_H_i").".zip";
            if ($zip->open(public_path($zip_file_name), ZipArchive::CREATE) === TRUE)
            {
                $files = File::files(public_path($file_path));
       
                $this->addContent($zip, realpath($file_path));
                 
                $zip->close();
            }
            return response()->download(public_path($zip_file_name))->deleteFileAfterSend();
        }
        return response()->json([
            "message" => "Folder not exist"
        ]);
    }

    private function addContent(ZipArchive $zip, string $path)
    {
        /** @var SplFileInfo[] $files */
        $iterator = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator(
                $path,
                FilesystemIterator::FOLLOW_SYMLINKS
            ),
            RecursiveIteratorIterator::SELF_FIRST
        );
    
        while ($iterator->valid()) {
            if (!$iterator->isDot()) {
                $filePath = $iterator->getPathName();
                $relativePath = substr($filePath, strlen($path) + 1);
    
                if (!$iterator->isDir()) {
                    $zip->addFile($filePath, $relativePath);
                } else {
                    if ($relativePath !== false) {
                        $zip->addEmptyDir($relativePath);
                    }
                }
            }
            $iterator->next();
        }
    }
}
